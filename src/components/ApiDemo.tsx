import { useState, useEffect } from "react";
import { Search, User, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useApi } from "@/hooks/useApi";
import Button from "./Button";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Enhanced translations with unique content for each article
const getUniqueContent = (id: number, text: string, isTitle: boolean = false): string => {
  const uniqueTitles = [
    "Introduction to React Development",
    "TypeScript Best Practices Guide", 
    "Building Scalable Web Applications",
    "Modern CSS Layout Techniques",
    "JavaScript Performance Optimization",
    "Responsive Design Fundamentals",
    "API Integration Strategies",
    "Component Architecture Patterns",
    "State Management Solutions",
    "Testing React Applications",
    "Web Accessibility Guidelines",
    "Progressive Web App Development"
  ];

  const uniqueBodies = [
    "Explore the latest techniques in modern web development, focusing on component-based architecture and efficient state management patterns for building robust applications.",
    "Learn essential strategies for building responsive and accessible web applications using current industry standards and proven methodologies.",
    "Discover advanced JavaScript concepts and learn how to apply them effectively in real-world development scenarios with practical examples.",
    "Master the art of creating maintainable and scalable code through proper design patterns and architectural decisions that stand the test of time.",
    "Understand the importance of performance optimization and learn how to implement effective caching, loading strategies, and user experience improvements.",
    "Dive deep into modern CSS features and learn how to create beautiful, responsive layouts with minimal code and maximum efficiency.",
    "Explore different approaches to API design and integration, including RESTful services, GraphQL implementations, and real-time data synchronization.",
    "Learn how to structure large applications using modular components and efficient data flow patterns for optimal maintainability.",
    "Understand various state management solutions and learn when to use each approach for optimal application performance and developer experience.",
    "Discover testing strategies and tools that ensure your applications are robust, reliable, and maintainable throughout their lifecycle.",
    "Learn the fundamentals of web accessibility and how to create inclusive experiences that work for all users regardless of their abilities.",
    "Explore the world of Progressive Web Apps and learn how to create app-like experiences that work seamlessly across all devices and platforms."
  ];

  if (isTitle) {
    return uniqueTitles[(id - 1) % uniqueTitles.length];
  } else {
    return uniqueBodies[(id - 1) % uniqueBodies.length];
  }
};

const ApiDemo = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: posts, loading: postsLoading, error: postsError } = useApi<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const { data: users, loading: usersLoading } = useApi<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Process posts to use unique content and limit to 12
  const processedPosts = posts?.slice(0, 12).map(post => ({
    ...post,
    title: getUniqueContent(post.id, post.title, true),
    body: getUniqueContent(post.id, post.body, false)
  })) || [];

  const filteredPosts = processedPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Split filtered posts into pages of 6
  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const pages = [];
  
  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    pages.push(filteredPosts.slice(startIndex, endIndex));
  }

  const getUserName = (userId: number) => {
    return users?.find(user => user.id === userId)?.name || "Unknown Author";
  };

  if (postsError) {
    return (
      <section id="api-demo" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">API Demo</h2>
          <Card className="bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200">
            <p>Error loading posts: {postsError}</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="api-demo" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Real API Data Integration</h2>
          <p className="text-lg text-muted-foreground mb-8">
            12 unique articles from JSONPlaceholder API with search functionality and sliding carousel
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles by title or content..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background text-foreground"
            />
          </div>
        </div>

        {postsLoading || usersLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse p-6">
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded w-5/6"></div>
                </div>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="h-3 bg-muted rounded w-20"></div>
                  <div className="h-3 bg-muted rounded w-16"></div>
                </div>
              </Card>
            ))}
          </div>
        ) : pages.length > 0 ? (
          <>
            <Carousel className="w-full">
              <CarouselContent>
                {pages.map((pageArticles, pageIndex) => (
                  <CarouselItem key={pageIndex}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {pageArticles.map((post) => (
                        <Card key={post.id} hover className="h-full flex flex-col p-6">
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-foreground capitalize">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 flex-1 line-clamp-3 text-sm leading-relaxed">
                            {post.body}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                            <div className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              <span>{getUserName(post.userId)}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>Article #{post.id}</span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {pages.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>

            <div className="text-center text-sm text-muted-foreground mt-8">
              Showing {filteredPosts.length} articles across {pages.length} page{pages.length !== 1 ? 's' : ''}
              {searchTerm && (
                <span className="ml-2">
                  (filtered by search term)
                </span>
              )}
            </div>
          </>
        ) : (
          <div className="text-center text-muted-foreground">
            No articles found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default ApiDemo;