import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { getNewToken, logUser } from "../helpers/tokenHelpers";


const useAuth = (code) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.accessToken)
  const refreshToken = useSelector(state => state.auth.refreshToken)
  const expireDate = useSelector(state => state.auth.expireDate);

  useEffect(() => {
    logUser(code, dispatch, navigate);
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expireDate) return

    const interval = setInterval(() => {
      console.log('changed');

      getNewToken(refreshToken,dispatch);
    }, 1800 * 1000);

    return () => clearInterval(interval)
  }, [refreshToken, expireDate])
}

export default useAuth
