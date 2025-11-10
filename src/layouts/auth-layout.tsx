import { Outlet } from "react-router-dom";
import AuthFooter from "@/components/ui/auth-footer";

export default function AppLayout() {
  return (
    <>
      <main>
        <Outlet /> 
      </main>
      <AuthFooter />
    </>
  );
}
