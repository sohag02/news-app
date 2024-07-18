import CategoryTab from "@/components/categoryTab"

export default function CategoryLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <CategoryTab />
   
        {children}
      </section>
    )
  }