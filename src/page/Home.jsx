import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LabelAndTextInput } from '../components/Molecules/LabelAndTextInput';
import { Button } from '../components/Atmos/Button';

function Home() {
	const navigate = useNavigate();
  const [inputFormValues, setInputFormValues] = useState ({
    lastName: '',
    firstName: '',
    favoriteFood: '',
    favoriteDrink: '',
    hobby: '',
    myBoom: '',
  }); 
  
  const validator = {
    isValidLastName: () => inputFormValues.lastName.length > 0,
    isValidFirstName: () => inputFormValues.firstName.length > 0,
    isValidFavoriteFood: () => inputFormValues.favoriteFood.length > 0,
    isValidFavoriteDrink: () => inputFormValues.favoriteDrink.length > 0,
    isValidHobby: () => inputFormValues.hobby.length > 0,
    isValidMyBoom: () => inputFormValues.myBoom.length > 0,
    canSend: () =>
      validator.isValidLastName() &&
      validator.isValidFirstName() &&
      validator.isValidFavoriteFood() &&
      validator.isValidFavoriteDrink() &&
      validator.isValidHobby() &&
      validator.isValidMyBoom(),
  };

  const handleChangeLastName = (e) => {
    setInputFormValues({
      ...inputFormValues,
      lastName: e.target.value,
    })
  }
  const handleChangeFirstName = (e) => {
    setInputFormValues({
      ...inputFormValues,
      firstName: e.target.value,
    })
  }
  const handleChangeFavoriteFood = (e) => {
    setInputFormValues({
      ...inputFormValues,
      favoriteFood: e.target.value,
    })
  }
  const handleChangeFavoriteDrink = (e) => {
    setInputFormValues({
      ...inputFormValues,
      favoriteDrink: e.target.value,
    })
  }
  const handleChangeHobby = (e) => {
    setInputFormValues({
      ...inputFormValues,
      hobby: e.target.value,
    })
  }
  const handleChangeMyBoom = (e) => {
    setInputFormValues({
      ...inputFormValues,
      myBoom: e.target.value,
    })
  }
	
  return (
    <div>
      <h1>アンケートフォーム</h1>
      <LabelAndTextInput
        labelName='苗字'
        inputValue={inputFormValues.lastName}
        inputOnChange={handleChangeLastName}
      />
      <LabelAndTextInput
        labelName='名前'
        inputValue={inputFormValues.firstName}
        inputOnChange={handleChangeFirstName}
      />
      <LabelAndTextInput
        labelName='好きな食べ物'
        inputValue={inputFormValues.favoriteFood}
        inputOnChange={handleChangeFavoriteFood}
      />
      <LabelAndTextInput
        labelName='好きな飲み物'
        inputValue={inputFormValues.favoriteDrink}
        inputOnChange={handleChangeFavoriteDrink}
      />
      <LabelAndTextInput
        labelName='趣味'
        inputValue={inputFormValues.hobby}
        inputOnChange={handleChangeHobby}
      />
      <LabelAndTextInput
        labelName='マイブーム'
        inputValue={inputFormValues.myBoom}
        inputOnChange={handleChangeMyBoom}
      />
      <Button
        value='登録'
        onClick={() => {
          navigate('/done');
        }}
        isValid={!validator.canSend()}
      />
      <Button
        value='キャンセル'
        onClick={() => {
          console.log('キャンセルしたよ');
        }}
        isValid={false}
      />
    </div>
  );
};

export default Home;