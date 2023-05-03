import NavigationMenu from "./NavigationMenu";

export default function NavigationPanel() {
  return (
    <section className="sticky top-0 hidden h-full w-[230px] shrink-0 flex-col overflow-hidden border-r border-solid border-grey-50 bg-white shadow-[0px_0.639628px_1.27926px_rgba(16,_24,_40,_0.05)] lg:flex">
      <NavigationMenu />
    </section>
  );
}
