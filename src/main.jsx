/* eslint-disable no-unused-vars */
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/Router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
// tankstack
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
