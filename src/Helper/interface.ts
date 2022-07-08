import React from "react";

export interface Item {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
}

export interface Repos {
    id: number;
    name: string;
    language: string
    handleCardClicked: React.MouseEventHandler;
}

export interface ReposDetail {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    description: string;
    language: string
}

export interface pagination {
    contentNumber: number;
    contentLength: number | undefined;
}

export interface buttonCloseModal {
    handleModalClosed: React.MouseEventHandler;
  }
