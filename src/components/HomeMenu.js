import MenuItem from "@/components/MenuItems/MenuItem";

export default function Hero() {
  return (
    <section>
      <div className = "text-center">
        <h3 className = "leading-4 text-zinc-800 font-semibold text-2xl">
          Check Out
        </h3>
        <h3 className = "leading-15 text-red-500 font-semibold text-5xl">
          Menu
        </h3>    
        <div className = "pt-8 grid grid-cols-3 gap-4">
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </div>
      </div>        
    </section>
  );
}