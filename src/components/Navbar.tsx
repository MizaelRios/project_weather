import Link from "next/link";
import Image from "next/image";
import CustomButton from "./ui/CustomButton";
import { images } from "@/constants";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src= {images.logo}
          alt='logo'
          width={200}
          height={200}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Entrar'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;
