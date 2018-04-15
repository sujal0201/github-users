import React from 'react';

export default function UserTable(props) {
	return(

		 <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Username</th>
              <th>Followers</th>
              <th>Following</th>
              <th>profile</th>
              <th>Repo-link</th>
              <th>Image</th>
              <th>Admin</th>
            </tr>
            </thead>

            <tbody>
            {
              props.data.map(row => (
            <tr>
              <td>{row.id}</td>
              <td>{row.login}</td>
              <td><a href={row.followers_url}>Followers Link</a></td>
              <td><a href={row.following_url}>Following Link</a></td>
              <td><a href={row.html_url} >Visit Profile</a></td>
              <td><a href={row.repos_url}>Github Repositories</a></td>
              <td><img src={row.avatar_url}  width='50' height='auto' /></td>
              <td><input type="checkbox" name = "admin"></input>{row.site_admin}</td>
            </tr>
            ))
            }
            </tbody>
          </table>
          )
      
}