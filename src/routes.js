import ArticlesPage from "./pages/ArticlesPage";
import ArticlesAdminPage from "./pages/Admin/ArticlesAdminPage";
import ArticlesFormPage from "./pages/Admin/ArticlesFormPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesEditPage from "./pages/Admin/ArticlesEditPage"

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
    component: ArticlesEditPage,
  },
  {
    path: "/articles/:id",    
    component: ArticlePage,
  },
];
export default routes
