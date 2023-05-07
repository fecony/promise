import {
  Link as UILink,
  Text,
  Display,
  Button,
  Grid,
  Spacer,
} from '@geist-ui/core';
import Github from '@geist-ui/icons/github';
import Send from '@geist-ui/icons/send';
import { Link, useHistory } from 'react-router-dom';

const MainPage = () => {
  let history = useHistory();

  return (
    <>
      <Display
        title='Geist UI'
        caption={
          <>
            Welcome to{' '}
            <Text span b i>
              Promise
            </Text>{' '}
            and start delivering more!
            <Text>or promising...</Text>
          </>
        }
      />

      <Grid.Container gap={2} justify='center'>
        <Grid xs={24} justify='center'>
          <Button
            shadow
            type='secondary-light'
            width='50%'
            onClick={() => window.open('https://github.com/fecony/promise')}
          >
            <Github size={16} />
            <Spacer inline w={0.35} />
            GitHub Repo
          </Button>
        </Grid>

        <Grid xs={24} justify='center'>
          <Button width='50%' onClick={() => history.push('/promise/create')}>
            Start promising!
            <Spacer inline w={0.35} />
            <Send size={16} />
          </Button>
        </Grid>

        <Grid xs={12} justify='center'>
          <Link to='/promise'>
            <UILink block>Read other Developer promises.</UILink>
          </Link>
        </Grid>
      </Grid.Container>
    </>
  );
};
export default MainPage;
