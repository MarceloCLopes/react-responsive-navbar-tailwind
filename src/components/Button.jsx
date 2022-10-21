export function Button(props) {
  return (
    <button className="bg-indigo-600 text-white font-[Poppins] duration-500 px-6 py-2 mr-4 hover:bg-indigo-500 rounded md:ml-8">
      {props.children}
    </button>
  );
}
