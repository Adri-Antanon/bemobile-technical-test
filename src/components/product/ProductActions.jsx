import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ProductActions = ({ options, productId }) => {
  const { register, handleSubmit } = useForm();

  const { colors, storages } = options;
  const [productInfo, setProductInfo] = useState('');

  console.log(colors, storages, productInfo);
  //   Falta desestructurar la información que recojo, es un objeto con dos propiedades
  return (
    <form onSubmit={handleSubmit((data) => setProductInfo(data))}>
      <select {...register('color')}>
        <option value={colors[0].code}>{colors[0].name}</option>
        {/* {colors.map((color) => (
        ))} */}
      </select>
      <select {...register('storage')}>
        <option value={storages[0].code}>{storages[0].name}</option>
        {/* {storages.map((storage) => (
        ))} */}
      </select>
      <p>{`${productInfo} - ${productId}`}</p>
      <input type="submit" />
    </form>
  );
};

export default ProductActions;
