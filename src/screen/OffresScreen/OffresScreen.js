import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Offres from '../../layouts/Offres/Offres'
import { useDispatch } from 'react-redux'
import { apiGet } from '../../Api/standardApi'
export default function OffresScreen (props) {
  const [dataOffer, setDataOffer] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  function goBack () {
    dispatch({ type: 'LOGOUT' })
    props.navigation.navigate('LoginScreen')
  }
  function onPickOffer (data) {
    props.navigation.navigate('CgvScreen')
  }
  const getData = async () => {
    const DATA = await apiGet('/user/getOffer')
    setDataOffer(DATA.offer)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {loading
        ? null
        : <Offres
          goBack={goBack}
          onPickOffer={onPickOffer}
          dataOffer={dataOffer}
        />
      }
    </>
  )
}
