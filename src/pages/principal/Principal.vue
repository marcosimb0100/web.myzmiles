<template>
	<h2><label style="font-weight: bold;">Supplier</label></h2>
	<Dropdown v-if="proveedor === 'verificador'" v-model="selectedStatus" :options="arrayStatus" @change="handleTableDeal()" optionLabel="description" placeholder="Select a status" class="w-full md:w-14rem" />
	<br>
	<br>
	<table class="table tableFormat" style="font-size:14px" v-if="proveedor === 'verificador'">

		<thead>
			<tr>
				<th style="text-align: center;" scope="col"><label>#</label></th>
				<th style="text-align: center;" scope="col"><label>Deal Name</label></th>
				<th style="text-align: center;" scope="col"><label>Interest</label></th>

				<th style="text-align: center;" scope="col" v-if="selectedStatus.status === 'Produce (ok)'"><label>Upper Aligners</label></th>
				<th style="text-align: center;" scope="col" v-if="selectedStatus.status === 'Produce (ok)'"><label>Lower Aligners</label></th>
				<th style="text-align: center;" scope="col" v-if="selectedStatus.status === 'Produce (ok)'"><label>Number Aligners</label></th>

				<th style="text-align: center;" scope="col"><label>Status</label></th>
				<th style="text-align: center;" scope="col"><label>Option</label></th>
			</tr>
		</thead>

		<tbody>
			<tr v-for=" ({id, Deal_Name, Interest, Id_Contact, Id_Interest, Status_Validation}, index) in arrayDeals" :key="index">
				<th scope="row">{{index + 1}}</th>
				<td>{{ Deal_Name }}</td>
				<td>{{ Interest }}</td>
				<td style="text-align: center;" v-if="selectedStatus.status === 'Produce (ok)'">
					<!-- <input type="number" class="form-control" style="width: 90px;" @change="handleUpdateUpperAligners($event, id)" :value="Upper_aligners" v-if="( Status_Validation === '' || Status_Validation === 'Pending' )"> -->
				</td>
				<td style="text-align: center;" v-if="selectedStatus.status === 'Produce (ok)'">
					<!-- <input type="number" class="form-control" style="width: 90px;" @change="handleUpdateLowerAligners($event, id)" :value="Lower_aligners" v-if="( Status_Validation === '' || Status_Validation === 'Pending' )"> -->
				</td>
				<td style="text-align: center;" v-if="selectedStatus.status === 'Produce (ok)'">
					<!-- {{ !( Status_Validation === null || Status_Validation === 'Pending' ) ? Number_aligners : 0 }} -->
				</td>
				<td style="text-align: center;">
					{{ Status_Validation }}
				</td>
				<td style="text-align: center;">
					<button class="btn btn-info" style="margin-left: 2px; margin-right: 2px; color: white;" @click="handleShowApproved(id)" v-if="Status_Validation === 'Pending'">
						<font-icon :icon="['fas', 'thumbs-up']" /> Approved
					</button>
					<button class="btn btn-success" style="margin-left: 2px; margin-right: 2px; color: white;" @click="handleShowProdece(id, Id_Contact, Id_Interest)" v-if="Status_Validation === 'Approved'">
						<font-icon :icon="['fas', 'gears']" /> Produce (ok)
					</button>
					<button class="btn btn-danger" style="margin-left: 2px; margin-right: 2px;" @click="handleShowDeclined(id)" v-if="Status_Validation !==  'Declined'">
						Declined
					</button>
					||
					<button class="btn btn-info" style="margin-left: 2px; margin-right: 2px; color: white;" @click="handleShowNotes(id)">
						<font-icon :icon="['fas', 'id-card-clip']" /> Notes
					</button>
					<button class="btn btn-success" icon="pi pi-cloud" style="margin-left: 2px; margin-right: 2px;" @click="handleShowFiles(id, Id_Contact, Id_Interest)">
						<font-icon :icon="['fas', 'cloud']" /> Files Manager
					</button>
					<!-- <button class="btn btn-success" style="margin-left: 2px; margin-right: 2px;" disabled>
						<font-icon :icon="['fas', 'cloud-arrow-up']" /> <font-icon :icon="['fas', 'file-pdf']" /> Charge Invoice
					</button> -->
				</td>
			</tr>
		</tbody>

	</table>

	<table class="table tableFormat" style="font-size:14px" v-if="proveedor === 'fabricante'">

		<thead>
			<tr>
				<th style="text-align: center;" scope="col"><label>#</label></th>
				<th style="text-align: center;" scope="col"><label>Deal Name</label></th>
				<th style="text-align: center;" scope="col"><label>Interest</label></th>

				<th style="text-align: center;" scope="col"><label>Upper Aligners</label></th>
				<th style="text-align: center;" scope="col"><label>Lower Aligners</label></th>
				<th style="text-align: center;" scope="col"><label>Number Aligners</label></th>

				<th style="text-align: center;" scope="col"><label>Status</label></th>
				<!-- <th style="text-align: center;" scope="col"><label>Stage Replica</label></th> -->
				<th style="text-align: center;" scope="col"><label>Option</label></th>
			</tr>
		</thead>

		<tbody>
			<tr v-for=" ({id, Deal_Name, Interest, Number_aligners, Upper_aligners, Lower_aligners, Id_Contact, Id_Interest, Stage_Replica}, index) in arrayDeals" :key="index">
				<th scope="row">{{index + 1}}</th>
				<td>{{ Deal_Name }}</td>
				<td>{{ Interest }}</td>
				<td style="text-align: center;">
					{{ Upper_aligners }}
				</td>
				<td style="text-align: center;">
					{{ Lower_aligners }}
				</td>
				<td style="text-align: center;">{{ Number_aligners }}</td>

				<td style="text-align: center;">{{ Stage_Replica === null ? 'None' : Stage_Replica }}</td>
				<!-- <td style="text-align: center;">
					<button class="btn btn-info" style="margin-left: 2px; margin-right: 2px;" v-if="Stage_Replica === null" @click="handleUpdateStatusFab(id, 'Finished')">
						Finished
					</button>
					<button class="btn btn-success" style="margin-left: 2px; margin-right: 2px;" v-if="Stage_Replica === 'Finished'" @click="handleUpdateStatusFab(id, 'Delivered')">
						Delivered
					</button>
				</td> -->
				<td style="text-align: center;">
					<button class="btn btn-info" style="margin-left: 2px; margin-right: 2px; color: white;" @click="handleShowNotes(id)">
						<font-icon :icon="['fas', 'id-card-clip']" /> Notes
					</button>
					<button class="btn btn-success" icon="pi pi-cloud" style="margin-left: 2px; margin-right: 2px;" @click="handleShowFiles(id, Id_Contact, Id_Interest)">
						<font-icon :icon="['fas', 'cloud']" /> Files Manager
					</button>

					<button class="btn btn-success" style="margin-left: 2px; margin-right: 2px;" disabled>
						<font-icon :icon="['fas', 'cloud-arrow-up']" /> <font-icon :icon="['fas', 'file-pdf']" /> Charge Invoice
					</button>
				</td>
			</tr>
		</tbody>

	</table>


	<!-- <i class="fa-solid fa-cloud-arrow-up"></i> -->

	<Dialog v-model:visible="modalNotes" :modal="true" header="Header" footer="Footer" :breakpoints="{'1200px': '100vw'}" :style="{width: '70vw'}" style="border: 3px solid rgba(229, 106, 111);">
        <template #header>
			<h3 style="color: rgb(53, 80, 112); font-weight: bold; font-size: 20px;">Notes</h3>
			<hr>
        </template>

		<div style="height: 600px; overflow: auto; font-size: 18px;">
			
			<ul>
				<li v-for="({note_created_time, note_title, note_content}, index) in arrayNotes" :key="index">
					<div class="">
						<div class="col-3">{{ note_created_time.replace('T', ' ').substring(0, 19) }} {{ note_title }}</div>
						<div class="col">{{ note_content }}</div>
					</div>
				</li>
			</ul>

		</div>

		<template #footer>
            <hr>
            <button class="btn btn-dark" icon="pi pi-times" @click="handleCloseNotes()">Close</button>
        </template>

	</Dialog>


	<Dialog v-model:visible="modalFiles" :modal="true" header="Header" footer="Footer" :breakpoints="{'1200px': '100vw'}" :style="{width: '70vw'}" style="border: 3px solid rgba(229, 106, 111);">
        <template #header>
			<h3 style="color: rgb(53, 80, 112); font-weight: bold; font-size: 20px;">Files Manager</h3>
			<hr>
        </template>

		<div style="height: 600px; overflow: auto; font-size: 18px;">
			<TabView>
				<TabPanel header="Files">
					
					<div class="contentFiles">
						
						<div v-for="date, index in arrayFiles" :key="index" class="border-2 surface-border border-round m-2 text-center py-4 px-1">
							<div>
								<span class="mb-0">{{ date.name }}</span>
								<h6 class="mt-3">Type: {{ date.type }}</h6>
								<div class="mt-5 flex align-items-center justify-content-center gap-2">
									<button style="color:white;" class="btn btn-info" @click="handleDownloadFile(date.id, date.name)">
										<font-icon :icon="['fas', 'cloud']" />
									</button>
								</div>
							</div>
						</div>

					</div>

				</TabPanel>
				<!-- <TabPanel header="Upload" v-if="proveedor === 'verificador'">

					<FileUpload name="demo[]" customUpload @uploader="handleUploadFile" :multiple="true" accept="image/*">
						<template #empty>
							<div style="height: 350px; display: flex; justify-content: center; align-items: center;">
								<p>Drag and drop files to here to upload.</p>
							</div>
						</template>
					</FileUpload>

				</TabPanel> -->
			</TabView>

		</div>

		<template #footer>
            <hr>
            <button class="btn btn-dark" @click="handleCloseFiles()">Close</button>
        </template>

	</Dialog>


	<Dialog v-model:visible="modalDeclined" :modal="true" header="Header" footer="Footer" :breakpoints="{'800px': '100vw'}" :style="{width: '30vw'}" style="border: 3px solid rgba(229, 106, 111);">
        <template #header>
			<h3 style="color: rgb(53, 80, 112); font-weight: bold; font-size: 20px;">Declined</h3>
			<hr>
        </template>

		<div style="height: 200px; overflow: auto; font-size: 18px;">
			
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">Reason Decline</label>
				<textarea class="form-control" v-model="reasonDecline" id="exampleFormControlTextarea1" rows="6"></textarea>
			</div>

		</div>

		<template #footer>
            <hr>
			<button class="btn btn-warning" icon="pi pi-times" @click="handleUpdateStatusDeclined()">Declined</button>
            <button class="btn btn-dark" icon="pi pi-times" @click="handleCloseDeclined()">Close</button>
        </template>

	</Dialog>


	<Dialog v-model:visible="modalFiles" :modal="true" header="Header" footer="Footer" :breakpoints="{'1200px': '100vw'}" :style="{width: '70vw'}" style="border: 3px solid rgba(229, 106, 111);">
        <template #header>
			<h3 style="color: rgb(53, 80, 112); font-weight: bold; font-size: 20px;">Files Manager</h3>
			<hr>
        </template>

		<div style="height: 600px; overflow: auto; font-size: 18px;">
			<TabView>
				<TabPanel header="Files">
					
					<div class="contentFiles">
						
						<div v-for="date, index in arrayFiles" :key="index" class="border-2 surface-border border-round m-2 text-center py-4 px-1">
							<div>
								<span class="mb-0">{{ date.name }}</span>
								<h6 class="mt-3">Type: {{ date.type }}</h6>
								<div class="mt-5 flex align-items-center justify-content-center gap-2">
									<button style="color:white;" class="btn btn-info" @click="handleDownloadFile(date.id, date.name)">
										<font-icon :icon="['fas', 'cloud']" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</TabPanel>
				<!-- <TabPanel header="Upload" v-if="proveedor === 'verificador'">

					<FileUpload name="demo[]" customUpload @uploader="handleUploadFile" :multiple="true" accept="image/*">
						<template #empty>
							<div style="height: 350px; display: flex; justify-content: center; align-items: center;">
								<p>Drag and drop files to here to upload.</p>
							</div>
						</template>
					</FileUpload>

				</TabPanel> -->
			</TabView>
		</div>
		<template #footer>
            <hr>
            <button class="btn btn-dark" @click="handleCloseFiles()">Close</button>
        </template>
	</Dialog>


	<Dialog v-model:visible="modalUploadFile" :modal="true" header="Header" footer="Footer" :breakpoints="{'200px': '100vw'}" :style="{width: '40vw'}" style="border: 3px solid rgba(229, 106, 111);">
        <template #header>
			<h3 style="color: rgb(53, 80, 112); font-weight: bold; font-size: 20px;">Produce - Upload Files {{ id_produce }} {{ id_contact_produce }} {{ id_interest_produce }}</h3>
			<hr>
        </template>
		<div style="height: 300px; font-size: 18px; padding: 5px;">

				<div class="row">
					<div class="col">
						<!-- multiple="true" -->
						<input
							type="file"
							class="form-control"
							@change="handleUploadFile"
						/>
					</div>
				</div>
				
				<hr>

				<div class="row">
					<div class="col">
						<div class="flex flex-column gap-2">
							<label for="username">File Link:</label>
							<InputText id="username" v-model="stringFilesUpload" aria-describedby="username-help" />
						</div>
					</div>
				</div>
				
				<div class="row">
					<div class="col"></div>
					<div class="col"></div>
					<div class="col">
						<div class="flex flex-column gap-2">
							<label>Upper Aligners:</label>
							<InputText v-model="upperAlignersInput" style="text-align: center;" @change="handleUpdateUpperAligners($event, id)" />
						</div>
					</div>
					<div class="col">
						<div class="flex flex-column gap-2">
							<label>Lower Aligners:</label>
							<InputText v-model="lowerAlignersInput" style="text-align: center;" @change="handleUpdateLowerAligners($event, id)" />
						</div>
					</div>
					<div class="col">
						<div class="flex flex-column gap-2">
							<label>Number Aligners:</label>
							<InputText v-model="numberAlignersInput" style="text-align: center;" disabled />
						</div>
					</div>
					<div class="col"></div>
					<div class="col"></div>
				</div>
				<div class="row">
					<div class="col"></div>
					<div class="col">
						<div class="d-grid gap-2">
							<Button class="btn btn-primary" type="button" :disabled="btnProduceOkDisable" @click="handleModalProduce">Produce (ok)</Button>
						</div>
					</div>
					<div class="col"></div>
				</div>

		</div>
		<template #footer>
            <hr>
            <button class="btn btn-dark" @click="handleCloseProduce()">Close</button>
        </template>
	</Dialog>


</template>

<script>
import proceso from './js/proceso.js';
export default {
    name:'',
    components: {},
    setup(){
        return{
            ...proceso()
        }
    }
}
</script>

<style>
    @import './css/estilo.css';
</style>


<!-- <button class="btn btn-info" style="margin-left: 2px; margin-right: 2px; color: white;" @click="handleShowApproved(id)" v-if="( Status_Validation === '' || Status_Validation === 'Pending' )">
						<font-icon :icon="['fas', 'thumbs-up']" /> Approved
					</button> -->
					<!-- <button class="btn btn-success" style="margin-left: 2px; margin-right: 2px;" @click="handleUpdateStatus(id, 'Produce (ok)')" v-if="( Status_Validation === 'Approved' )">
						Produce (ok)
					</button> -->
					<!-- <button class="btn btn-success" style="margin-left: 2px; margin-right: 2px;" @click="handleUpdateStatus(id, 'Approved')" v-if="!( Status_Validation === null || Status_Validation === 'Pending' )"> -->
						<!-- Approved -->
					<!-- </button> -->