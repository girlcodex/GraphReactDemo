import * as React from 'react';
// @ts-ignore
import * as THREE from 'three';

import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList, { OwnProps } from './LaunchList';
const scene = new THREE.Scene();
const LaunchListContainer: React.FC<OwnProps> = (props) => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <LaunchList data={data} {...props} />;
};
console.log(scene)
export default LaunchListContainer;