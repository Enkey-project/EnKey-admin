import { useState } from "react";
import { AdminPage } from "./pages";
import { SiteInfoPage } from "./pages";

type PageType = "worker-records" | "site-info";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("site-info");

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "worker-records" && (
        <AdminPage onPageChange={handlePageChange} />
      )}
      {currentPage === "site-info" && (
        <SiteInfoPage onPageChange={handlePageChange} />
      )}
    </>
  );
}

export default App;
