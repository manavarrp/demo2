import Image from 'next/image';
import confiadora from '../public/confiadora.png';

function logo() {
  return (
    <div className="flex justify-center py-4 gap-3">
      <picture>
        <Image width={30} height={30} src={confiadora} alt="confiadora" />
      </picture>
      <span className="text-darkBlue text-3xl font-bold w-2/3 text-center">
        {' '}
        confiadora
      </span>
    </div>
  );
}

export default logo;
