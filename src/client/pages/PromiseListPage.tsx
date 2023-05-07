import { Fragment } from 'react';
import { Loading, Page, Text, Divider } from '@geist-ui/core';
import { useQuery } from '@wasp/queries';
import getPromises from '@wasp/queries/getPromises';
import { Promise as PromiseEntity } from '@wasp/entities';
import { Link } from 'react-router-dom';

const PromiseListPage = () => {
  const { data: promises, isFetching } = useQuery(getPromises);

  if (isFetching) {
    return <Loading type='success' />;
  }

  return (
    <>
      <Page.Header>
        <h2>Promises made</h2>
      </Page.Header>

      <Link to='/'>
        <Text>Main Page</Text>
      </Link>

      {promises &&
        promises.map((promise: PromiseEntity) => (
          <Fragment key={promise.id}>
            <Text>{promise.text}</Text>
            <Divider />
          </Fragment>
        ))}
    </>
  );
};

export default PromiseListPage;
