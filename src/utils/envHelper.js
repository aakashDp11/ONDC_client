import dotenv from 'dotenv';
import path from 'path';

const loadEnvVariables = () => {
    console.log('env file', process.env.NODE_ENV);
    if (process.env.NODE_ENV.trim() === "development")
        {
        console.log("development mode!!!!");
        console.log("ab",path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`));
        const result=dotenv.config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV.trim()}`) });
        // console.log("cd",process.env.ENV_TYPE);
        if (result.error) {
            console.error("Error loading .env file:", result.error);
        } else {
            console.log("Loaded ENV_TYPE:", process.env.ENV_TYPE);
        }
    }

}   

export default loadEnvVariables;