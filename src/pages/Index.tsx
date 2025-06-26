
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import TaskManager from "@/components/TaskManager";
import ApiDemo from "@/components/ApiDemo";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-16">
        <Hero />
        <TaskManager />
        <ApiDemo />
      </div>
    </Layout>
  );
};

export default Index;
