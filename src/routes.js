import ArticlesPage from "./pages/ArticlesPage";
import ArticlesAdminPage from "./pages/Admin/ArticlesAdminPage";
import ArticlesFormPage from "./pages/Admin/ArticlesFormPage";
import ArticlePage from "./pages/ArticlePage";

const routes = [
  {
    path: "/articles",
    exact:true,
    component: ArticlesPage,
  },
  {
    path: "/admin/articles",    
    exact:true,
    component: ArticlesAdminPage,
  },
  {
    path: "/admin/articles/create",    
    exact:true,
    component: ArticlesFormPage,
  },
  {
    path: "/admin/articles/edit/:id",
    component: ArticlesFormPage,
  },
  {
    path: "/articles/:id",    
    component: ArticlePage,
  },
];
export default routes
