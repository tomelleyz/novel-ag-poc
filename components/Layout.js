import MainContent from "./MainContent";
import NavigationPanel from "./navigation/NavigationPanel";

export default function Layout({ setOpenSearchCommandMenu, children }) {
  return (
    <div>
      <NavigationPanel />
      <MainContent setOpenSearchCommandMenu={setOpenSearchCommandMenu}>
        {children}
      </MainContent>
    </div>
  );
}
