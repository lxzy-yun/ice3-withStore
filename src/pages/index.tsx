import store from "@/store";

export default function IndexPage() {
  const [userState, userDispatchers] = store.useModel("user");

  return (
    <div>
      <header>
        <p>{JSON.stringify(userState)}</p>
      </header>
    </div>
  );
}

// 随意写个暴露的变量就可以了，注释掉这行代码就会报Cannot read properties of null (reading 'store')
// export const a = [];
