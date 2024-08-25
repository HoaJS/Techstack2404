import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchUsers = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
};

const UsersReactQuery = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
		staleTime: 60000,
		gcTime: 60000,
		refetchOnWindowFocus: false,
	});

	if (isLoading) {
		return <h1>Loading....</h1>;
	}
	if (error) {
		return <h1>Error: {error.message}</h1>;
	}

	console.log('Loading...');
	console.log('error');

	return (
		<ul>
			{data?.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	);
};

export default UsersReactQuery;