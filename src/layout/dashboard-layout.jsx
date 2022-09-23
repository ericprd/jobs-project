export default function DashboardLayout(props) {
  return (
    <div className='flex w-full h-full overflow-y-scroll relative'>
      {props.children}
    </div>
  );
}
