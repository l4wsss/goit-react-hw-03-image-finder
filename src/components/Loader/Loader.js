import {Hourglass} from 'react-loader-spinner'
import {LoaderContainer} from './Loader.styled'

export const Loader = () => {
    return (
        <>
          <LoaderContainer>
            <Hourglass width="200" color="tomato" />
          </LoaderContainer>
        </>
      );
}