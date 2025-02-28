import { Body, Controller, Post } from '@nestjs/common';
import { FakeClientService } from './fake-client.service';
import { FakeClient } from 'src/types/auth/FakeClient';
import { PinoLogger } from 'nestjs-pino';

@Controller('fake-client')
export class FakeClientController {
    constructor(private readonly fakeClientService: FakeClientService,private readonly logger:PinoLogger ){
        this.logger.setContext(FakeClientController.name)
    }

    @Post()
    async getFakeClientCredentioals(@Body() fakeClient: FakeClient): Promise<string> {
        this.logger.trace(`[FAKE CLIENT CONTROLLER] Recent request for gettinc credentials for user with uid ${fakeClient.uid}`)
        return await this.fakeClientService.getCredentials(fakeClient);
      }

}
