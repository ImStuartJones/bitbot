import { LinkMap } from '../PayloadTypes';
import { RepositoryEvent, RepositoryEventConfig, RepositoryEventType } from './RepositoryEvent';
export declare type Change<T> = {
    new: T;
    old: T;
};
export declare type Changes = {
    name?: Change<string>;
    website?: Change<string>;
    language?: Change<string>;
    links?: Change<LinkMap>;
    description?: Change<string>;
    full_name?: Change<string>;
};
export declare type UpdatedConfig = {
    changes: Changes;
} & RepositoryEventConfig;
export declare class Updated extends RepositoryEvent<UpdatedConfig> {
    constructor(config: UpdatedConfig);
    toMessageObject(): any;
    repositoryEventType(): RepositoryEventType;
}
