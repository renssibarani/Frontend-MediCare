import MainLayout from "@/layout/main";
import { useRouter } from "next/router";

export default function riwayat() {
    const router = useRouter()
    const next = () => {
        router.push('/dokter/tambah/laboratorium2');
    }
    return (
        <MainLayout>
            <div className="row">
                <div className="col fw-bold fs-5">Laboratorium</div>
                <div className="row mt-4 bg-white p-4">
                    <div className="col-3 fw-bold"></div>
                    <div className="col">
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label fw-bold">Mikroskopis</label>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col col-form-label">Leukosit</label>
                                <div class="col-8">
                                    <input type="password" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col col-form-label">Eritrosit</label>
                                <div class="col-8">
                                    <input type="password" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col col-form-label">Silinder</label>
                                <div class="col-8">
                                    <input type="password" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col col-form-label">Kristal</label>
                                <div class="col-8">
                                    <input type="password" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col col-form-label">Epitel</label>
                                <div class="col-8">
                                    <input type="password" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col col-form-label fw-bold">Kimia</label>
                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col col-form-label">Protein</label>
                                    <div class="col-8">
                                        <input type="password" class="form-control" id="inputPassword" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col col-form-label">Glukosa</label>
                                    <div class="col-8">
                                        <input type="password" class="form-control" id="inputPassword" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Bilirubin</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Urabilin</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Benda Keton</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12"></div>
                    <div className="col-3 fw-bold">Rotgen</div>
                    <div className="col">
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Jantung</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Paru-Paru</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">EKG</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12"></div>
                    <div className="col-3 fw-bold">Rotgen</div>
                    <div className="col">
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Kesimpulan</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col col-form-label">Anjuran</label>
                            <div class="col-8">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end p-4">
                        <button onClick={() => next()} class="col-2 btn btn-success">Simpan</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}