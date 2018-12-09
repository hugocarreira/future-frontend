import axios from 'axios'
import config from '../config/configuration'

export const getTeam = (team_id) => 
    axios.get(`${config.API_URL}/team/${team_id}`)

export const getTeamPlayers = (team_id) => 
    axios.get(`${config.API_URL}/team/${team_id}/player`)

export const createPlayer = (team_id, body) => 
    axios.post(`${config.API_URL}/team/${team_id}/player`, body)

export const getPlayer = (team_id, player_id) => 
    axios.get(`${config.API_URL}/team/${team_id}/player/${player_id}`)

export const getTeamTrainings = (team_id) =>
    axios.get(`${config.API_URL}/team/${team_id}/training`)

export const removeTraining = (training_id) => 
    axios.delete(`${config.API_URL}/training/${training_id}`)

export const createTeamTraining = (team_id) =>
    axios.post(`${config.API_URL}/team/${team_id}/training`, {})

export const getTraining = (team_id, training_id) =>
    axios.get(`${config.API_URL}/team/${team_id}/training/${training_id}`)

export const updateTraining = (training_id, body) =>
    axios.put(`${config.API_URL}/training/${training_id}`, body)

export const getDrill = (team_id) =>
    axios.get(`${config.API_URL}/team/${team_id}/drill`)

export const getPlaybooks = (team_id) => 
    axios.get(`${config.API_URL}/team/${team_id}/playbook`)

export const deleteDrill = (drill_id) =>
    axios.delete(`${config.API_URL}/drill/${drill_id}`)

export const deletePlaybook = (playbook_id) => 
    axios.delete(`${config.API_URL}/playbook/${playbook_id}`)

export const uploadFile = (form_data, header) => 
    axios.post(`${config.API_URL}/file/upload`, form_data, header)