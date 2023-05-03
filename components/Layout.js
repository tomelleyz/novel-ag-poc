import MainContent from "./MainContent";
import NavigationPanel from "./navigation/NavigationPanel";

export default function Layout({ children }) {
  return (
    <div>
      <NavigationPanel />
      <MainContent>{children}</MainContent>
    </div>
  );
}
