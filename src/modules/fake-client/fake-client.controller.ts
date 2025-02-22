import { Body, Controller, Post } from '@nestjs/common';
import { FakeClientService } from './fake-client.service';
import { FakeClient } from 'src/types/auth/FakeClient';

@Controller('api/fake-client')
export class FakeClientController {
    constructor(private readonly fakeClientService: FakeClientService){
    }

    @Post()
    async getFakeClientCredentioals(@Body() fakeClient: FakeClient): Promise<string> {
        return await this.fakeClientService.getCredentials(fakeClient);
      }

}
