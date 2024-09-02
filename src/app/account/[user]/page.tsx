export const dynamic = "force-static";

const getData = async () => {
   console.log("getData ", Date.now());
   return null;
};
export default async function User({ params }: { params: { user: string } }) {
   const data = await getData();
   console.log(data);
   console.log(Date.now());
   return <>{JSON.stringify(params, null, 4)}</>;
}
