import React,{useState} from "react"
import { useNavigate } from "react-router-dom"


interface UserDetails {
 name:string,
 email:string,
 password:string,
 confirmPassword:string
}

const SignUp: React.FC = () => {
    const [UserDetails,setUserDetails] = useState<UserDetails>({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const [error,setError] = useState<string | null> (null);
    const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
    const naviagate = useNavigate();


    const handleSignUp = async (e:React.FormEvent) =>{
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        // basic validation
        if(UserDetails.password !== UserDetails.confirmPassword){
          setError("Password do not match");
          setIsSubmitting(false);
          return;
        }
       
    



    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
              <div>
                <label htmlFor="name"></label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                value={UserDetails.name}
                onChange={handleSignUp}
                required
                className=""/>
              </div>
              <div>
                <label htmlFor="email"/>
                <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={UserDetails.email}
                onChange={handleSignUp}
                required
                className=""/>
              </div>

              <div>
                <label htmlFor="password"/>
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                value={UserDetails.password}
                onChange={handleSignUp}
                required
                className=""/>
              </div>

              <div>
                <label htmlFor="confirmPassword"/>
                <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Enter Your Confirm Password"
                value={UserDetails.confirmPassword}
                onChange={handleSignUp}
                required
                className=""/>
              </div>
              {error && <p className="color-red">{error}</p>}

              <button
              type="submit"
              className=""
              disabled={isSubmitting}/>
             {isSubmitting ? "Signing Up..." : "Sign Up"}
            </form>
        </div>
    );
};