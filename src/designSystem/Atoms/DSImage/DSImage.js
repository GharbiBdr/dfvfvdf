import React from 'react'
import { Image, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { usePrevious } from '../../../customHooks'
import RNFetchBlob from 'rn-fetch-blob'

const DSImage = (props) => {
  const [imageData, setImageData] = React.useState({
    width: 0,
    height: 0,
    ratio: 0,
    ext: ''
  })

  const prevSource = usePrevious(props.source)

  React.useEffect(() => {
    if (prevSource != props.source) {
      setImageData({
        width: 0,
        height: 0,
        ratio: 0,
        ext: ''
      })
    }

    if (imageData.width === 0) {
      if (typeof props.source === 'number') {
        const uri = Image.resolveAssetSource(props.source).uri
        let splitted = uri.split('.')
        let ext = splitted[splitted.length - 1]
        splitted = ext.split('?')
        ext = splitted[0]
        const w = Image.resolveAssetSource(props.source).width
        const h = Image.resolveAssetSource(props.source).height
        const ratio = w / h
        setImageData({
          width: w,
          height: h,
          ratio: ratio,
          ext: ext
        })
      } else {
        const uri = props.source.uri
        const splitted = uri.split('.')
        const ext = splitted[splitted.length - 1]
        if (ext === 'svg') {
          RNFetchBlob.fetch('GET', uri)
            .then(res => {
              let svg = res.data
              let pos = svg.indexOf('viewBox')
              svg = svg.substring(pos + 9)
              pos = svg.indexOf('"')
              svg = svg.substring(0, pos)
              const splittedsvg = svg.split(' ')
              const ratio = splittedsvg[2] / splittedsvg[3]
              setImageData({
                width: splittedsvg[2],
                height: splittedsvg[3],
                ratio: ratio,
                ext: ext
              })
            })
            .catch(error => console.log(error))
        } else {
          Image.getSize(props.source.uri, (w, h) => {
            const ratio = w / h
            setImageData({
              width: w,
              height: h,
              ratio: ratio,
              ext: ext
            })
          })
        }
      }
    }
  })

  if (imageData.ratio) {
    if (imageData.ext === 'svg') {
      if (typeof props.source === 'number') {
        return (
                    <View style={{ width: props.width ? props.width : '100%', aspectRatio: imageData.ratio }}>
                        <SvgUri
                            width="100%"
                            height="100%"
                            uri={Image.resolveAssetSource(props.source).uri}
                        />
                    </View>
        )
      } else {
        return (
                    <View style={{ width: props.width ? props.width : '100%', aspectRatio: imageData.ratio }}>
                        <SvgUri
                            width="100%"
                            height="100%"
                            uri={props.source.uri}
                        />
                    </View>
        )
      }
    } else {
      return (
                <Image source={props.source} style={{ width: props.width ? props.width : '100%', height: undefined, aspectRatio: imageData.ratio }} />
      )
    }
  }
  return null
}

export default DSImage
