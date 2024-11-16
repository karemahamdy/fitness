import Button from "./Button";

function SearchForm({ value, onChange, onClick }) {

  return (
    <>
      <div className="flex  gap-2 mb-3">
        <input
          className="w-[350px] lg:w-[1170px] h-[56px] font-bold  border-none focus:border-none rounded-md bg-white text-black px-4 py-2"
          value={value}
          onChange={onChange}
          placeholder="Search Exercises"

        />
        <Button bg="bg-[#FF2625]" rounded="rounded-md" onClick={onClick}>Search</Button>

      </div>
    </>
  );
}

export default SearchForm;
