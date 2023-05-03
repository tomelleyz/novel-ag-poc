import MainContent from "./MainContent";
import NavigationPanel from "./navigation/NavigationPanel";

export default function Layout({ children }) {
  return (
    <div className="relative flex h-screen overflow-hidden">
      <NavigationPanel />
      <MainContent>{children}</MainContent>
    </div>
  );
}
