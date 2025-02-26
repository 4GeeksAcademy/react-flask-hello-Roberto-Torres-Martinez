import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CreateUser } from "./CreateUser.jsx";
import { Login } from "./Login.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<>
		<CreateUser>
			
		</CreateUser>
		</>
	);
}; 