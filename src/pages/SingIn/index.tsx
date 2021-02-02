import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import getValidationError from '../../utils/getValidationErrors';
import { useAuth } from '../../context/auth';

import * as S from './styled';
import Button from '../../components/Button';

interface SingCredentials {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SingCredentials) => {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Este email é  inválido'),
        password: Yup.string()
          .min(6, 'Senha deve ter no mínimo 6 caracteres.')
          .required('Senha obrigatória'),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <S.SingInWrapper>
      <S.SectionLogin>
        <S.SectionLoginForm>
          <header>
            <h1>
              <span>Entrar</span>
              <b>SIGU</b>
            </h1>
            <small>sistema integrado de gestão de usuários</small>
          </header>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <section>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                icon={FiMail}
              />
              <Input
                name="password"
                type="password"
                placeholder="Sua senha"
                icon={FiLock}
              />
            </section>

            <Button type="submit" label="entrar" icon={FiArrowRight} />
          </Form>

          <p>
            Ainda não tem conta?
            <Link to="/singup">criar conta</Link>
          </p>
        </S.SectionLoginForm>
      </S.SectionLogin>
    </S.SingInWrapper>
  );
};

export default SingIn;
