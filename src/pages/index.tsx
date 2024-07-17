import store from '@/store';

export default function IndexPage() {
  const [userState, userDispatchers] = store.useModel('user');

  return (
    <div >
      <header>
        <p>
          {JSON.stringify(userState)}
        </p>
      </header>

    </div>
  );
}
