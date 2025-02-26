import { useEffect, useState } from "react"
import { protectedRoute } from "../services/APIServices";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const PrivateArea = () => {

    const [isauthenticated, setIsAuthenticated] = useState(null)

    const navigate = useNavigate()
    
    useEffect(() => {
        const checkOut = async () => {
            try {
                const authenticated = await protectedRoute()
                if (!authenticated){
                    navigate("/")
                    return 
                }
                setIsAuthenticated(true)
            } catch (error) {
                
            }
        }
        checkOut()
    }, []);

    return (
        <>{
            isauthenticated == null ?
            <div>Loading...</div>:<h1>Private Area</h1>
        }
        </>
    )
}