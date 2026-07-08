const PageContainer = ({ children }) => {
  return (
    <main className="ml-64 mt-16 p-8 bg-slate-100 min-h-screen">
      {children}
    </main>
  );
};

export default PageContainer;