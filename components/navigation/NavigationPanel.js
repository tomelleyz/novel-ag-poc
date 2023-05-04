import NavigationMenu from "./NavigationMenu";

export default function NavigationPanel() {
  return (
    <section className="fixed inset-0 right-auto hidden w-[230px] border-r border-solid border-grey-50 bg-white shadow-[0px_0.639628px_1.27926px_rgba(16,_24,_40,_0.05)] lg:block">
      <div className="relative flex h-full flex-col">
        <NavigationMenu />
      </div>
    </section>
  );
}
