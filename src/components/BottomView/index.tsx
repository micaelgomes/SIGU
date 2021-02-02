import React, { useCallback, useRef, useState } from 'react';
import { FiXCircle, FiUser, FiMail, FiLock, FiUserCheck } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Dropzone from '../Dropzone';
import Input from '../Input';
import getValidationError from '../../utils/getValidationErrors';
import { useUser } from '../../context/users';
import { useToast } from '../../context/toast';

import * as S from './styled';
import Button from '../Button';

interface UserModel {
  id: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
}

interface BottomViewProps {
  statusBottomView: boolean;
  toogleBottomView(): void;
  user: UserModel;
}

interface SingCredentials {
  name: string;
  email: string;
  password: string;
}

const BottomView: React.FC<BottomViewProps> = ({
  statusBottomView,
  toogleBottomView,
  user,
}) => {
  const formRef = useRef<FormHandles>(null);
  const { addUser, updateUser, updateAvatarUser } = useUser();
  const { addToast } = useToast();

  const [imageItem, setImageItem] = useState<File>();

  const handleSubmit = useCallback(
    async (data: SingCredentials) => {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string(),
        email: Yup.string().email('Este email é  inválido'),
        password: Yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres.'),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        if (!user.id) {
          await addUser({
            name: data.name,
            email: data.email,
            password: data.password,
          });

          addToast({
            type: 'info',
            title: 'Usuário criado com sucesso',
          });
        } else {
          await updateUser({
            id: user.id,
            name: data.name,
            email: data.email,
            password: data.password,
          });

          if (imageItem) {
            updateAvatarUser(imageItem, user.id);
          }
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Opa.. algo deu errado.',
        });
      }

      toogleBottomView();
    },
    [
      addToast,
      addUser,
      imageItem,
      toogleBottomView,
      updateAvatarUser,
      updateUser,
      user.id,
    ],
  );

  return (
    <>
      <S.Overlay
        statusBottomView={statusBottomView}
        onClick={toogleBottomView}
      />

      <S.BottomViewWrapper statusBottomView={statusBottomView}>
        <S.BottomViewHeader>
          <header>
            <h5>{!user.id ? 'Adicionar um novo usuário' : 'Editar usuário'}</h5>

            <button onClick={toogleBottomView}>
              <FiXCircle size={24} />
            </button>
          </header>
        </S.BottomViewHeader>

        <S.BottomViewBody>
          <Form
            ref={formRef}
            initialData={{ name: user.name, email: user.email }}
            onSubmit={handleSubmit}
          >
            <section>
              <Dropzone image={user.image} setImageToUpload={setImageItem} />
            </section>

            <section>
              <Input
                name="name"
                type="text"
                placeholder="Nome de Usuário"
                icon={FiUser}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                icon={FiMail}
              />
              <Input
                name="password"
                type="text"
                placeholder="Sua senha"
                icon={FiLock}
              />
              <Button
                type="submit"
                label={!user.id ? 'adicionar usuário' : 'atualizar usuário'}
                icon={FiUserCheck}
              />
            </section>
          </Form>
        </S.BottomViewBody>
      </S.BottomViewWrapper>
    </>
  );
};

export default BottomView;
