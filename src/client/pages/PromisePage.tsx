import { Page, Text, Input, Spacer, Button, useToasts } from '@geist-ui/core';
import { Link } from 'react-router-dom';
import makePromise from '@wasp/actions/makePromise';
import Heart from '@geist-ui/icons/heart';

const PromisePage = () => {
  const { setToast } = useToasts();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const text = event.target.text.value;

      event.target.reset();
      await makePromise({ text });

      setToast({
        text: 'You made a promise!',
        type: 'success',
      });
    } catch (err) {
      window.alert('Error: ' + err.message);
    }
  };

  return (
    <>
      <Page.Header>
        <h2>
          Make a{' '}
          <Text span i>
            Promise
          </Text>{' '}
        </h2>
      </Page.Header>

      <Link to='/'>
        <Text>Main Page</Text>
      </Link>

      <Spacer />
      <form onSubmit={handleSubmit}>
        <Input
          required
          clearable
          icon={<Heart />}
          name='text'
          placeholder='What will you promise now?'
          width={'100%'}
        />

        <Button ghost type='abort' htmlType='submit'>
          Make a Promise
        </Button>
      </form>
    </>
  );
};

export default PromisePage;
