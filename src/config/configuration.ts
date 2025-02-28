import { ConfigFactory} from '@nestjs/config';
import devConfig from './development.json'
import prodConfig from './production.json'
import testConfig from './testing.json'


export const getConfigFilePath: ConfigFactory = () => {
    const environment = process.env.NODE_ENV || 'development';
    switch (environment) {
        case 'development':
              return devConfig   
        case 'production' :
            return prodConfig 
        case 'testing':
            return testConfig 
        default:
            return devConfig 
    }
  };