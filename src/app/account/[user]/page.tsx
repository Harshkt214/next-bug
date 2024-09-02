export const dynamic = "force-static";

const getData = () => {
   console.log("getData ", Date.now());
   return null;
};
export default function User({ params }: { params: { user: string } }) {
   const data = getData();
   console.log(data);
   console.log(Date.now());
   return <>{JSON.stringify(params, null, 4)}</>;
}
