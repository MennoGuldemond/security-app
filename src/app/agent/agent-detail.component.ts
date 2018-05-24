import { Component, OnInit } from '@angular/core';
import { ScrtyApiService } from '@scrty/api';

@Component({
    selector: 'scrty-agent-detail',
    templateUrl: './agent-detail.component.html',
    styleUrls: ['./agent-detail.component.scss']
})
export class AgentDetailComponent implements OnInit {

    constructor(private scrtyApi: ScrtyApiService) { }

    ngOnInit(): void {
        console.log('Get agent data.');

        this.scrtyApi.getAgentData('test').subscribe(result => {
            result.subscribe(data => {
                console.log(data);
            });
        });
    }

}
