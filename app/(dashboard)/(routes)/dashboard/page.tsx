import { UserButton } from "@clerk/nextjs";


const DashBoardPage = () => {
  return (
    <>
      <div>
        <p>Dashboard Page (Protected)</p>
        <UserButton />
      </div>
    </>
  )
};

export default DashBoardPage;
