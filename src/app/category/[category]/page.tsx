

export default function Page({ params }: { params: { category: string } }) {
    return <div>category: {params.category}</div>;
  }